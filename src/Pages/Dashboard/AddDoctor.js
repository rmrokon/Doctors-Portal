import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { data: services, isLoading } = useQuery('/services', () => fetch("http://localhost:5000/services").then(res => res.json()));

    const imgStorageKey = 'ba174ce3bc57048f9cd66363c4b7ddfe';


    // 3 Ways to store Images
    // 1. 3rd party Storage 
    // 2. Own Storage 
    // 3. Database Storage
    // YUP to validate File : Search YUP file validation for react hook form

    const onSubmit = async (data) => {
        // const { name, email, password, confirmPassword } = data;
        console.log('data', data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const imageURL = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imageURL,
                    };

                    fetch("http://localhost:5000/addDoctor", {
                        method: 'POST',
                        headers: {
                            "content-type": "application/json",
                            "authorization": `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data) {
                                toast("Doctor added successfully");
                                reset();

                            }
                            else {
                                toast.error("Failed to add Doctor");
                            }
                        });

                }
            })

    }

    if (isLoading) {
        return <Loading></Loading>;
    }
    return (
        <div className='w-1/2 mx-auto'>
            <h2 className='text-2xl text-accent text-center my-5'>Add a new doctor!</h2>
            <form action="" className='flex flex-col items-center' onSubmit={handleSubmit(onSubmit)}>

                {/* Name Field */}
                <input type="text" name='name' placeholder="Full Name" className="input w-full  mb-2 select-bordered" {...register("name", {
                    required: {
                        value: true,
                        message: "Name is required"
                    },
                })} />

                <p>{errors?.name?.type === "required" && <span className='text-red-400'>{errors?.name?.message}</span>}</p>

                {/* Email Field */}

                <input type="email" name='email' placeholder="Email Address" className="input w-full  mb-2 select-bordered" {...register("email", {
                    required: {
                        value: true,
                        message: "Email is required"
                    },
                    pattern: {
                        value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: "Please enter a valid email"
                    }

                })} />

                <p>{errors?.email?.type === "required" && <span className='text-red-400'>{errors?.email?.message}</span>}</p>

                {/* Image Field */}

                <input type="file" name='image' className="input w-full  mb-2 select-bordered" {...register("image", {
                    required: {
                        value: true,
                        message: "Image is required"
                    },
                })} />

                <p>{errors?.name?.type === "required" && <span className='text-red-400'>{errors?.name?.message}</span>}</p>

                {/* Specialty Field */}

                <label className='label'>
                    <span className='label-text text-lg'>Specialty</span>
                </label>

                <select {...register("specialty")} className="select select-bordered w-full">
                    <option disabled selected>Pick your Specialty</option>
                    {
                        services.map(service => <option key={service._id}>{service.name}</option>)
                    }
                </select>

                <input className='btn btn-primary text-white font-bold bg-accent w-full mt-2' type="submit" value="Add Doctor" />
            </form>
        </div>
    );
};

export default AddDoctor;