import { UnprocessableEntityException } from "@nestjs/common";
import { ValidationError } from "class-validator";
export default function validationError(validationErrors?: ValidationError[]): UnprocessableEntityException;
