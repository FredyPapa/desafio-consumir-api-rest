import { Developer } from "./developer";
import { Project } from "./project";

export interface Programming {
  id?: number,
  project: Project,
  developers: Developer[],
  comment: string
}
