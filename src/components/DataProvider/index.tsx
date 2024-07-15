"use client";

import { db } from "@/Firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import React, { createContext, useState, useEffect } from "react";

interface DataContextTypes {
  name: string;
  price: number;
  description: string;
  imgUrl: string;
}

const defaultAuth: DataContextTypes[] = [];

const ProductsContext = createContext(defaultAuth);

const DataProvider = ({ children }: any) => {
  const [data, setData] = useState<DataContextTypes[]>([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const docs = querySnapshot.docs.map(
        (doc) =>
          ({
            name: doc.data().name,
            price: doc.data().price,
            description: doc.data().description,
            imgUrl: doc.data().imgUrl,
          } as unknown as DataContextTypes)
      );
      setData(docs);
    };

    fetchDocuments();
  }, []);

  return (
    <ProductsContext.Provider value={data}>{children}</ProductsContext.Provider>
  );
};

export { ProductsContext, DataProvider };
