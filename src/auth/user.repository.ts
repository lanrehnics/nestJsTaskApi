import { EntityRepository, Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const  {username, password} = authCredentialsDto;

    const user = new UserEntity();
    user.username = username;
    user.password = password;

    await  user.save();

  }

}