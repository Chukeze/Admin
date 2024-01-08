'use server'

import { revalidatePath } from "next/cache"

export async function create(formData:FormData) {
    try{
        await createItem(formData.get('item'))
        revalidatePath('/')
        return {message: 'Success!'}
    }catch(e) {
        return {message: 'There was an error.'}
    }
}