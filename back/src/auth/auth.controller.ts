import { Controller, Post, UseGuards, Request, Get } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
	constructor(private authService: AuthService) {}

	@Post("login")
	async login(@Request() req) {
		return this.authService.login(req.body);
	}

	@UseGuards(AuthGuard("jwt"))
	@Get("profile")
	getProfile(@Request() req) {
		return req.user;
	}
}
