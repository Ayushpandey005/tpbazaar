

import { useRouter } from "next/router";
import React from 'react';
import SubcatProducts from "./SubcatProducts";
import Productalldetails from './Productsalldetails';

const ID = () => {
    const router = useRouter();
    const { ID } = router.query;
    console.log(ID)
    
    if (!ID) {
        // Handle the case where ID is not defined or null
        return <div>Loading...</div>;
    }

    if (typeof ID === 'string' && (ID.startsWith('sce') || ID.startsWith('scl') || ID.startsWith('SCK'))) {
        return <SubcatProducts subcategoryid={ID} />;
    }
     else {
        return <Productalldetails pid={ID} />;
    }
};

export default ID;
