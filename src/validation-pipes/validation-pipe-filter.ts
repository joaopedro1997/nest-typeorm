import { UnprocessableEntityException } from "@nestjs/common";
import { ValidationError } from "class-validator";

export default function validationError(validationErrors: ValidationError[] = []){
    const messages = {};

    validationErrors.forEach((error) => {
      if (!messages[error.property]) {
        messages[error.property] = [];
      }
      Object.values(error.constraints).forEach((message) => {
        messages[error.property].push(message);
      });
    });
    
    const errors = messages
    
    return new UnprocessableEntityException({ statusCode: 422, errors});
}