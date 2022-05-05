import React from 'react'
import { useForm } from 'react-hook-form'
import { useDeleteClientMutation } from '../service/redux/CrudApi'
//@ts-ignore
import styles from '../styles/Home.module.css'
import { Num } from '../tools/types'
type DelDataPorp = {
    id: number
}
const DelData = ({ id }: DelDataPorp) => {
    const { register, handleSubmit } = useForm<Num>({
        defaultValues: { id },
    })
    const [del] = useDeleteClientMutation()
    return (
        <div>
            <form
                onSubmit={
                    //@ts-ignore
                    handleSubmit(del)
                }
            >
                {' '}
                <input type="hidden" {...register('id')} />
                <input type="submit" className={styles.submit} value="del" />
            </form>
        </div>
    )
}

export default DelData
