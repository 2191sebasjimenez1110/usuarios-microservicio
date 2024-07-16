import { NextFunction, Response, Request } from "express";

type Rol = 'admin' | 'medico';

const hasRole = (roles: Rol[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const rol: Rol = req.body.tokenRol;
            console.log(rol);
            
            if (roles.includes(rol)) {
                next();
            } else {
                res.status(403).json({ status: "Acceso denegado: rol insuficiente" });
            }
        } catch (error) {
            console.error("Error en la validación de rol:", error);
            res.status(500).json({ error: "Error interno del servidor" });
        }
    };
};

export const isAdminOrDoctor = hasRole(['admin', 'medico']);
export const isDoctor = hasRole(['medico']);
export const isAdmin = hasRole(['admin']);