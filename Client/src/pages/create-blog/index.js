import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { apiUrl } from '../../utils';

const CreateBlog = () => {
    const [CategoryName, setCategoryName] = useState('')
    const [CatDecs, setCatDecs] = useState('')
    const [CatAuth, setCatAuth] = useState('')
    const [CatDetail, setCatDetail] = useState('')
    const catFormData = {
        cat_id: CategoryName,
        name: CatDecs,
        author: CatAuth,
        blog_detail: CatDetail,
    }

    const handleCat = () => {
        axios.post(`${apiUrl}create_blog`, catFormData)
            .then(function (response) {
                console.log(response);
                setCategoryName('')
                setCatDecs('')
                setCatAuth('')
                setCatDetail('')
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        
        <div>
            <div className="container1">
                <div className='container2'>
                    <label>Category Id</label>
                    <input type='text' placeholder="ID" value={CategoryName} onChange={(e) => setCategoryName(e.target.value)} />
                </div>
                <div className='container3'>
                    <label>Category Name</label>
                    <input type='text' placeholder="Name" value={CatDecs} onChange={(e) => setCatDecs(e.target.value)} />
                </div>
                <div className='container3'>
                    <label>Blog Author</label>
                    <input type='text' placeholder="Author" value={CatAuth} onChange={(e) => setCatAuth(e.target.value)} />
                </div>
                <div className='container3'>
                    <label>Blog Description</label>
                    <input type='text' placeholder="Description" value={CatDetail} onChange={(e) => setCatDetail(e.target.value)} />
                </div>
                <Button onClick={handleCat} >Add Blog Category</Button>
            </div>

        </div>
    )
}

export default CreateBlog