"use client"

import { useForm } from "react-hook-form";
import { supabase } from "@/lib/supabaseClient"

export default function AddSentence () {

    const {register,handleSubmit,watch,formState:{errors}} = useForm();
    const formData = watch()

    const formSubmit = async (data) => {
        console.log(data);
        const error = await supabase
        .from('sentences')
        .insert({
            http_code: data.httpCode, 
            tag: data.tag, 
            message: data.message
        })
    }

    return (
        <div className="flex flex-col items-center">
            <form onSubmit={handleSubmit(formSubmit)}>

                <div className="flex gap-8">
                    <label>Code Http</label>
                    <input 
                        {...register('httpCode', {required: true })}
                        placeholder="701"
                    />
                    {errors.httpCode && <p className="text-red-700">Code Http manquant</p>}
                </div>

                <div className="flex gap-8">
                    <label>Tag</label>
                    <input 
                        {...register('tag', {required: true })}
                        placeholder="Edge Cases"
                    />
                    {errors.tag && <p className="text-red-700">Tag manquant</p>}
                </div>

                <div className="flex gap-8">
                    <label>Message</label>
                    <input 
                        {...register('message', {required: true })}
                        placeholder="Meh"
                    />
                    {errors.message && <p className="text-red-700">Message manquant</p>}
                </div>

                <input 
                    type='submit'
                    value='Ajouter la phrase'
                    className="cursor-pointer hover:scale-105"
                />
            </form>
        </div>
    )
}