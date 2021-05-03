import api from "../services/api";
import { useEffect, useState } from 'react';


export const useSelectName = async (name)=> {
 
    try {
        const { data } = await api.get(`pokemon/${name}`);
        return await data
    }
        
    catch (error) {
        alert("Ocorreu um erro ao buscar os items");
    }

}
