export let ComponentType = {
    textBox:'textBox',
    button:'button'
}

interface componentSettings{
    showLabel:boolean;
    staticText:string;
}
 
interface componentStyle{
    blockStyle:boolean;
    valueContent:string;
}

interface componentEvent{
    event:string;
}

export class componentValue{
    componentType:string;
    id:string;
    settings:componentSettings;
    styles:componentStyle;
}

export class componentconfig<T extends componentSettings> extends componentValue{
    settings:T;   
}

export interface textboxSettings extends componentSettings{
    placeHolder:string;
}
export interface button extends componentSettings{
    text:string;
}