import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const navigate = useNavigate()
    const { id } = useParams()

    const updateProduct = async (e) => {
        e.preventDefault()
        await axios.patch('http://localhost:5000/products/'+id,{
            title: title,
            price: price
        })
        navigate("/")
    }

    useEffect(() => {
        getProductById()
    }, [])

    const getProductById = async () => {
        const response = await axios.get('http://localhost:5000/products/'+id)
        setTitle(response.data.title)
        setPrice(response.data.price)
    }

  return (
    <div>
        <form onSubmit={ updateProduct }>
            <div className='filed'>
                <label className='label'>Nama Barang</label>
                <input 
                className='input' 
                type="text" 
                placeholder='Nama Barang'
                value={ title }
                onChange={ (e) => setTitle(e.target.value) }
                />
            </div>
            <div className='filed'>
                <label className='label'>Harga</label>
                <input 
                className='input' 
                type="text" 
                placeholder='Harga'
                value={ price }
                onChange={ (e) => setPrice(e.target.value) } 
                />
            </div>
            <div className='filed'>
                <button className='button is-primary'>Ubah</button>
            </div>
        </form>
    </div>
  )
}

export default EditProduct