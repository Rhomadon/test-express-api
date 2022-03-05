import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const navigate = useNavigate()

    const saveProduct = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:5000/products',{
            title: title,
            price: price
        })
        navigate("/")
    }

  return (
    <div>
        <form onSubmit={ saveProduct }>
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
                <button className='button is-primary'>Simpan</button>
            </div>
        </form>
    </div>
  )
}

export default AddProduct