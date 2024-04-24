export interface IProvincia {
  id: number;
  nombre_provincia: string;
}

export interface IEmpleados {
  id: number;
  emp_nombres: string;
  emp_apellidos: string;
  emp_status: string;
}

export interface IEmpleadoAdd {
  emp_nombres: string;
  emp_apellidos: string;
  emp_cedula: string;
  emp_fec_nacimiento: Date;
  emp_correo: string;
  emp_obs_pers: string;
  emp_foto: string | undefined;
  emp_fec_ingreso: Date;
  emp_cargo: string;
  emp_departamento: string;
  emp_salario: number;
  emp_jor_parcial: string;
  emp_obs_lab: string;
  provPersona_id: number;
  provLaboral_id: number;
}
