import React from 'react'
import {
    useAddClientMutation,
    useEditClientMutation,
} from 'config/rtk'
import {
    DEVISE,
    ICOTERM,
    PAYMENT_CHOICE,
    REQUEST_EDIT,
    REQUEST_SAVE,
} from '../../../tools/consts'
import { Client } from '../../../tools/types'
import Bcyan from '../../../widgets/Bcyan'
import Bred from '../../../widgets/Bred'
import Icon from '../../../widgets/Icon'
import View from '../../../widgets/View'
import { Field, Form } from 'components'

type FormClientManagerProp = {
    closed: () => void
    client: Client
    request: number
}
const FormClientManager = ({
    closed,
    client,
    request,
}: FormClientManagerProp) => {
    const [save] = useAddClientMutation()
    const [edit] = useEditClientMutation()
    const onSubmit = request == REQUEST_SAVE ? save : (request == REQUEST_EDIT ? edit : undefined);

    const Avatar = () => {
        return (
            <div className="sm:grid w-full sm:pt-5">
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <div className="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                            <img
                                src="/images/empty-avatar.png"
                                className="w-24 h-24 inline-block"
                            />
                            <div className="text-sm text-gray-600">
                                <label
                                    htmlFor="file-upload"
                                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                >
                                    <span>Your Avatar</span>
                                    <input
                                        id="file-upload"
                                        name="file-upload"
                                        type="file"
                                        className="sr-only"
                                    />
                                </label>
                            </div>
                            <p className="text-xs text-gray-500">
                                PNG, JPG, GIF up to 10MB
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <View>
            <div className="float-left w-full text-xs">
                <Form defaultValues={client} onSubmit={onSubmit}>
                    <h1>Nom & Prénom du client request={request}</h1>
                    <div className="float-left w-5/6">
                        <div className="float-left w-1/2">
                            {request == REQUEST_EDIT && (
                                <Field type="text" name="id" />
                            )}
                            <Field
                                label="Nom du client"
                                name="design"
                            />
                            <Field
                                label="concat"
                                name="concat"
                            />
                            <Field
                                label="email"
                                name="email"
                            />
                            <Field
                                label="tel"
                                name="tel"
                            />
                            <Field
                                label="device"
                                name="device"
                                options={DEVISE}
                                as="select"
                            />
                            <Field
                                label="adresse de livraison"
                                name="adrLiv"
                                as="textarea"
                            />
                        </div>
                        <div className="float-left w-1/2">
                            <Field
                                label="Mode de payment"
                                name="paymentChoice"
                                options={PAYMENT_CHOICE}
                                as="select"
                            />
                            <Field
                                label="incoterm"
                                name="incoterm"
                                options={ICOTERM}
                                as="select"
                            />
                            <Field
                                label="adresse de facturation"
                                name="adrFact"
                                as="textarea"
                            />
                            <Field
                                label="bank"
                                name="bank"
                            />
                            <Field
                                label="rib"
                                name="rib"
                            />
                            <Field
                                label="swift"
                                name="swift"
                            />
                        </div>
                    </div>
                    <div className="float-left w-1/6">
                        <Avatar />
                    </div>
                    <div className="float-left w-full mt-5">
                        <Bcyan
                            className="float-left"
                            onClick={() => {
                                setTimeout(() => {
                                    closed()
                                }, 500)
                            }}
                        >
                            <Icon i="save" cl="" />
                        </Bcyan>
                        {request == REQUEST_SAVE && (
                            <Bcyan
                                className="float-left"
                                type='submit'
                            >
                                <Icon i="save" cl="float-left" />{' '}
                                <span className="px-2 float-left">&&</span>
                                <Icon i="user-add" cl="float-left" />
                            </Bcyan>
                        )}
                    </div>
                </Form>
                <Bred
                    className="float-right"
                    onClick={() => {
                        closed()
                    }}
                >
                    <Icon i="cancel" cl="" />
                </Bred>
            </div>
        </View>
    )
}

export default FormClientManager
