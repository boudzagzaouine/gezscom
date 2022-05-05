import axios from 'axios'
import Link from 'next/link'
import React, { FC, InputHTMLAttributes, ReactNode } from 'react'
import { useForm } from 'react-hook-form'
import {
    useAddClientMutation,
    useEditClientMutation,
} from '../../../service/redux/CrudApi'
import {
    DEVISE,
    ICOTERM,
    INPUT,
    PAYMENT_CHOICE,
    REQUEST_EDIT,
    REQUEST_SAVE,
    SELECT,
    TEXTAREA,
} from '../../../tools/consts'
import { c0, Client, ColsClient } from '../../../tools/types'
import Bcyan from '../../../widgets/Bcyan'
import Bred from '../../../widgets/Bred'
import Icon from '../../../widgets/Icon'
import View from '../../../widgets/View'

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
    const { register, handleSubmit, reset } = useForm<Client>({
        defaultValues: client,
    })
    type LineProp = {
        label: string
        sels: string[]
        input: ColsClient
        type: number
    }
    const Line = ({ label, input, sels, type }: LineProp) => {
        const clas: string =
            'border outline-slate-200 float-left rounded w-full'
        return (
            <div className="sm:grid sm:grid-cols-4 sm:gap-4 sm:items-start sm:pt-5 w-full">
                <label
                    htmlFor="first-name"
                    className="w-full block font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                    {label}
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                    {type == INPUT ? (
                        <>
                            <input
                                type="text"
                                {...register(input)}
                                autoComplete="given-name"
                                className={'py-2 ' + clas}
                            />
                        </>
                    ) : type == TEXTAREA ? (
                        <>
                            <textarea
                                {...register(input)}
                                autoComplete="given-name"
                                className={'py-8 ' + clas}
                            ></textarea>
                        </>
                    ) : type == SELECT ? (
                        <>
                            <select
                                {...register(input)}
                                className={'py-2 ' + clas}
                            >
                                {sels.map((op) => (
                                    <option key={op} value={op}>
                                        {op}
                                    </option>
                                ))}
                            </select>
                        </>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        )
    }
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
    const noReq = () => {}
    return (
        <View>
            <div className="float-left w-full text-xs">
                <form
                    onSubmit={handleSubmit(
                        request == REQUEST_SAVE
                            ? save
                            : request == REQUEST_EDIT
                            ? edit
                            : noReq
                    )}
                >
                    <h1>Nom & Prénom du client request={request}</h1>
                    <div className="float-left w-5/6">
                        <div className="float-left w-1/2">
                            {request == REQUEST_EDIT && (
                                <input type="text" {...register('id')} />
                            )}
                            <Line
                                label="Nom du client"
                                input="design"
                                sels={[]}
                                type={INPUT}
                            />
                            <Line
                                label="concat"
                                input="concat"
                                sels={[]}
                                type={INPUT}
                            />
                            <Line
                                label="email"
                                input="email"
                                sels={[]}
                                type={INPUT}
                            />
                            <Line
                                label="tel"
                                input="tel"
                                sels={[]}
                                type={INPUT}
                            />
                            <Line
                                label="device"
                                input="device"
                                sels={DEVISE}
                                type={SELECT}
                            />
                            <Line
                                label="adresse de livraison"
                                input="adrLiv"
                                sels={[]}
                                type={TEXTAREA}
                            />
                        </div>
                        <div className="float-left w-1/2">
                            <Line
                                label="Mode de payment"
                                input="paymentChoice"
                                sels={PAYMENT_CHOICE}
                                type={SELECT}
                            />
                            <Line
                                label="incoterm"
                                input="incoterm"
                                sels={ICOTERM}
                                type={SELECT}
                            />
                            <Line
                                label="adresse de facturation"
                                input="adrFact"
                                sels={[]}
                                type={TEXTAREA}
                            />
                            <Line
                                label="bank"
                                input="bank"
                                sels={[]}
                                type={INPUT}
                            />
                            <Line
                                label="rib"
                                input="rib"
                                sels={[]}
                                type={INPUT}
                            />
                            <Line
                                label="swift"
                                input="swift"
                                sels={[]}
                                type={INPUT}
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
                                    reset(c0)
                                    closed()
                                }, 500)
                            }}
                        >
                            <Icon i="save" cl="" />
                        </Bcyan>
                        {request == REQUEST_SAVE && (
                            <Bcyan
                                className="float-left"
                                onClick={() => {
                                    setTimeout(() => {
                                        reset(c0)
                                    }, 500)
                                }}
                            >
                                <Icon i="save" cl="float-left" />{' '}
                                <span className="px-2 float-left">&&</span>
                                <Icon i="user-add" cl="float-left" />
                            </Bcyan>
                        )}
                    </div>
                </form>
                <Bred
                    className="float-right"
                    onClick={() => {
                        reset(c0)
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
