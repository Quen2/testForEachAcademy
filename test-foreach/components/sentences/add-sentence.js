"use client"

import { useForm } from "react-hook-form";
import { supabase } from "@/lib/supabaseClient"
import { toast } from "react-toastify";

export default function AddSentence ({setAddANewSentence}) {

    const {register,handleSubmit,watch,formState:{errors}} = useForm();
    const formData = watch()

    const formSubmit = async (data) => {
        const error = await supabase
        .from('sentences')
        .insert({
            http_code: data.httpCode, 
            tag: data.tag, 
            message: data.message
        })
        toast.success('Phrase ajoutée')
        setAddANewSentence(false)
    }

    return (
        <div className="flex flex-col items-center h-full relative text-center">
            <p onClick={() => {setAddANewSentence(false)}} className="absolute right-0 rounded-2xl px-2 py-1 border cursor-pointer hover:scale-105">X</p>
            <form onSubmit={handleSubmit(formSubmit)} className="flex flex-col justify-around h-full w-1/2">

                <div className="flex flex-col md:flex-row gap-8 p-1 justify-between">
                    <label className="p-1">Code Http</label>
                    <input 
                        {...register('httpCode', {required: true })}
                        placeholder="701"
                        className="border p-1 text-center"
                    />
                    {errors.httpCode && <p className="text-red-700">Code Http manquant</p>}
                </div>

                <div className="flex flex-col md:flex-row gap-8 p-1 justify-between">
                    <label className="p-1">Tag</label>
                    <input 
                        {...register('tag', {required: true })}
                        placeholder="Edge Cases"
                        className="border p-1 text-center"
                    />
                    {errors.tag && <p className="text-red-700">Tag manquant</p>}
                </div>

                <div className="flex flex-col md:flex-row gap-8 p-1 justify-between">
                    <label className="p-1">Message</label>
                    <input 
                        {...register('message', {required: true })}
                        placeholder="Meh"
                        className="border p-1 text-center"
                    />
                    {errors.message && <p className="text-red-700">Message manquant</p>}
                </div>

                <input 
                    type='submit'
                    value='Ajouter'
                    className="cursor-pointer hover:scale-105"
                />
            </form>
        </div>
    )
}