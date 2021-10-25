import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCrendentialsDTO } from './dto/auth-credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signUp')
  signUp(@Body() authCrendentialDto: AuthCrendentialsDTO): Promise<void> {
    return this.authService.signUp(authCrendentialDto);
  }
  @Post('/signIn')
  signIn(
    @Body() authCrendentialDto: AuthCrendentialsDTO,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCrendentialDto);
  }
}
