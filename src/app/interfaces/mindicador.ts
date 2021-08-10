export interface IndiceData {
    codigo: string,
    nombre: string,
    unidad_medida: string,
    fecha: Date,
    valor: number
} 

export interface IndiceHead {
    version: string;
    autor: string;
    fecha: Date;
} 

export interface LastValuesSerie {
    fecha: Date;
    valor: number;
}

export interface LastValues {
    version: string;
    autor: string;
    codigo: string;
    nombre: string;
    unidad_medida: string;
    serie: LastValuesSerie[];
}