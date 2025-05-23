import Categoria from "../models/Categorias.js";

const obtenerCategorias = async (req, res)=>{

    const Categorias = await Categoria.find();

    res.json(Categorias)

}

export {obtenerCategorias}