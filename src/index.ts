// tstemplate-react — React TypeScript component library template with Vite, CSS modules, and Storybook
export function process(data:string):string{return 'Processed: '+data}
export class Engine{private ready=false;init(){this.ready=true};run(d:string){if(!this.ready)this.init();return process(d)}}
export default Engine;
