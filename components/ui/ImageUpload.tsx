import { useDropzone } from 'react-dropzone';
import { useState } from 'react';
import Image from 'next/image';

interface ImageUploadProps {
  onChange: (base64: string) => void;
  value: string;
  label: string;
  disabled: boolean;
  alt: string;
}

const ImageUpload = ({
  onChange,
  label,
  value,
  alt,
  disabled,
}: ImageUploadProps) => {
  const [base64, setBase64] = useState(null);

  const handleChange = (base64: string) => {
    onChange(base64);
  };

  const handleDrop = (files: any) => {
    const file = files[0];
    const reader = new FileReader();
    console.log(file);

    reader.onload = (e: any) => {
      setBase64(e.target.result);
      handleChange(e.target.result);
    };

    reader.readAsDataURL(file);
  };

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    onDrop: handleDrop,
    disabled,

    accept: {
      'image/jpeg': [],
      'image/png': [],
    },
  });

  return (
    <div
      {...getRootProps({
        className:
          'w-full p-4 text-center bg-gray-100 border-2 border-gray-300 border-dashed rounded-md cursor-pointer',
      })}
    >
      <input {...getInputProps()} />
      {base64 ? (
        <div className="flex items-center justify-center">
          <Image src={base64} height={300} width={100} alt={alt} />
        </div>
      ) : (
        <p>{label}</p>
      )}
    </div>
  );
};

export default ImageUpload;
