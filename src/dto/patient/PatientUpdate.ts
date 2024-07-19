// PacienteDto.ts
export default class PatientUpdateDto {
    private _documentoPac: number;
    private _tipoDoc: string;
    private _nombre: string;
    private _apellido: string;
    private _email: string;
    private _telefono: string;
    private _direccion: string;
    private _fechaNac: Date;

    constructor(
        documentoPac: number,
        tipoDoc: string,
        nombre: string,
        apellido: string,
        email: string,
        fechaNac: Date,
        telefono: string,
        direccion: string,
    ) {
        this._documentoPac = documentoPac;
        this._tipoDoc = tipoDoc;
        this._nombre = nombre;
        this._apellido = apellido;
        this._email = email;
        this._fechaNac = fechaNac;
        this._telefono = telefono;
        this._direccion = direccion;
    }

    get documentoPac(): number {
        return this._documentoPac;
    }

    set documentoPac(documentoPac: number) {
        this._documentoPac = documentoPac;
    }

    get tipoDoc(): string {
        return this._tipoDoc;
    }

    set tipoDoc(tipoDoc: string) {
        this._tipoDoc = tipoDoc;
    }

    get nombre(): string {
        return this._nombre;
    }

    set nombre(nombre: string) {
        this._nombre = nombre;
    }

    get apellido(): string {
        return this._apellido;
    }

    set apellido(apellido: string) {
        this._apellido = apellido;
    }

    get email(): string {
        return this._email;
    }

    set email(email: string) {
        this._email = email;
    }

    get telefono(): string | undefined {
        return this._telefono;
    }

    set telefono(telefono: string | undefined) {
        this._telefono = telefono;
    }

    get direccion(): string | undefined {
        return this._direccion;
    }

    set direccion(direccion: string | undefined) {
        this._direccion = direccion;
    }

    get fechaNac(): Date {
        return this._fechaNac;
    }

    set fechaNac(fechaNac: Date) {
        this._fechaNac = fechaNac;
    }

}