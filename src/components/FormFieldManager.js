import React, { useState } from 'react';
import { updateFormFields } from '../services/api';

function FormFieldManager() {
  const [fields, setFields] = useState({
    fileType: '',
    maxSize: '',
    mandatoryFields: []
  });

  const handleSubmit = async () => {
    await updateFormFields(fields);
    alert('Form settings updated successfully!');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input for file type, max size, mandatory fields */}
    </form>
  );
}

export default FormFieldManager;
