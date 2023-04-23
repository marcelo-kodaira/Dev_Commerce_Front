import Modal from '@mui/material/Modal';
import { useForm} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from '../../../contexts/AuthContext';
import { Input } from '../../Input';
import { ModalButton , InputContainer, ModalTitle, StyledForm} from '../ModalStyles';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { editUserSchema } from '../../../Schemas/editUser.schema';

interface User {
    name: string,
    email: string,
    password: string,
    confirmPassword: string
}

interface ModalEditUserProps {
    open: boolean;
    handleClose: () => void;
}


const ModalEditUser = ({open,handleClose}:ModalEditUserProps) => {

  const {formState:{errors}, register, handleSubmit} = useForm<User>({
    resolver: yupResolver(editUserSchema)
  })

  const {token,user,updateUser} = useAuth()

  
  const handleEditProduct = (data:User) => {

    if(data.name == user.name && data.email === user.email && data.password == ""){
      handleClose()
      return
    }

    const {confirmPassword,...rest} = data
    
    updateUser(rest,user.id, token)
    .then(_ => {
      handleClose()
      toast.success('Dados alterados!')
    })

    if(user.name !== data.name){
      user.name = data.name
    }

    if(user.email !== data.email){
      user.email = data.email
    }

  }

  return (
    <div>
      
      <Modal
        
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledForm onSubmit={handleSubmit(handleEditProduct)}>
          <ModalTitle id="modal-modal-title">
            Altere sua conta
          </ModalTitle>

          <InputContainer id="modal-modal-description">
            <Input label='Nome' error={errors.name} {...register('name')} defaultValue={user.name} />

            <Input label='Email' error={errors.email} {...register('email')} defaultValue={user.email} />

            <Input label='Senha' error={errors.password} {...register('password')} placeholder='***********' />
            <span></span>

            <Input label='Confirmar Senha' error={errors.confirmPassword} {...register('confirmPassword')} placeholder='***********' />

          </InputContainer>

          <ModalButton type='submit'>Salvar alterações</ModalButton>

        </StyledForm>
      </Modal>
    </div>
  );
}

export default ModalEditUser