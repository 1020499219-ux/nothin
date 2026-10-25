import { defineConfig } from 'vite';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.dirname(fileURLToPath(import.meta.url));
const routes=()=>JSON.parse(fs.readFileSync(path.join(root,'src/routes.json'),'utf8'));
export default defineConfig({
  plugins:[{
    name:'captured-document-routes',
    configureServer(server){server.middlewares.use(async(req,res,next)=>{
      const url=new URL(req.url,'http://preview.local');
      const file=routes()[url.pathname.replace(/\/$/,'')];
      if(!file)return next();
      try {const html=await server.transformIndexHtml(url.pathname,fs.readFileSync(path.join(root,file),'utf8'));res.setHeader('Content-Type','text/html; charset=utf-8');res.end(html);}catch(error){next(error);}
    });},
    configurePreviewServer(server){server.middlewares.use((req,res,next)=>{
      const url=new URL(req.url,'http://preview.local');
      const route=url.pathname.replace(/\/$/,'');
      if(!routes()[route])return next();
      const filename=path.join(root,'dist/client',route.slice(1),'index.html');
      if(!fs.existsSync(filename))return next();
      res.setHeader('Content-Type','text/html; charset=utf-8');
      res.end(fs.readFileSync(filename));
    });},
    generateBundle(){for(const [route,file]of Object.entries(routes())){
      let html=fs.readFileSync(path.join(root,file),'utf8');
      html=html.replace('href="/src/local.css"','href="/local.css"').replace('src="/src/local.js"','src="/local.js"');
      this.emitFile({type:'asset',fileName:route.slice(1)+'/index.html',source:html});
    }
    for(const file of ['local.css','local.js'])this.emitFile({type:'asset',fileName:file,source:fs.readFileSync(path.join(root,'src',file),'utf8')});}
  }],
  server:{host:'0.0.0.0',port:5199,strictPort:true,allowedHosts:['terminal.local']},
  appType:'mpa',
  build:{outDir:'dist/client'}
});
