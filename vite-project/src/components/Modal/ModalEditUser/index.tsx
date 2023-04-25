import Modal from '@mui/material/Modal';
import { useForm} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from '../../../contexts/AuthContext';
import { Input } from '../../Input';
import { ModalButton , InputContainer, ModalTitle, StyledForm} from '../ModalStyles';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { editUserSchema } from '../../../Schemas/editUser.schema';
import { SpinnerDotted } from 'spinners-react';
import { useState } from 'react';

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
  const [loading, setLoading] = useState(false)

  
  const handleEditProduct = (data:User) => {

    const {confirmPassword,...rest} = data
    
    setLoading(true)
    updateUser(rest,user.id, token)
    .then(_ => {
      setLoading(false)
      handleClose()
      toast.success('Dados alterados!')
    }).catch(_ => setLoading(false))

    if(user.name !== data.name){
      user.name = data.name
    }

    if(user.email !== data.email){
      user.email = data.email
    }

  }

  return (

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

            <Input label='Email'type='email' error={errors.email} {...register('email')} defaultValue={user.email} />

            <Input label='Senha' type='password' error={errors.password} {...register('password')} placeholder='***********' />
            <span></span>

            <Input label='Confirmar Senha' type='password' error={errors.confirmPassword} {...register('confirmPassword')} placeholder='***********' />

          </InputContainer>

          <ModalButton type='submit' disabled={loading}>{loading?<SpinnerDotted color="white" size={"30px"}/>: 'Alterar dados'}</ModalButton>

        </StyledForm>
      </Modal>

  );
}

export default ModalEditUser