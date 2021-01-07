import React, { useState, useEffect } from 'react';
import { useAuth, authFetch, login, logout} from '../AuthProvider';
import { DataTable } from 'react-native-paper';

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        authFetch('http://localhost:5000/product')
            .then(r => r.json())
            .then(_products => {
                setProducts(_products.data);
            });
    }, []);
    
    return (
        <>
        <DataTable>
            <DataTable.Header>
                <DataTable.Title>Наименование</DataTable.Title>
                <DataTable.Title>Производитель</DataTable.Title>
                <DataTable.Title>Категория</DataTable.Title>
                <DataTable.Title>Описание</DataTable.Title>
                <DataTable.Title numeric>Вес {products[0]?.weightMeasure}</DataTable.Title>
                <DataTable.Title numeric>Длина {products[0]?.lwhMeasure}</DataTable.Title>
                <DataTable.Title numeric>Ширина {products[0]?.lwhMeasure}</DataTable.Title>
                <DataTable.Title numeric>Высота {products[0]?.lwhMeasure}</DataTable.Title>
                <DataTable.Title>Артикул</DataTable.Title>
                <DataTable.Title numeric>Количество</DataTable.Title>
                <DataTable.Title>Цена</DataTable.Title>
            </DataTable.Header>
            {
                products.map((product,i) => 
                    <DataTable.Row key={i}>
                        <DataTable.Cell>{product.name}</DataTable.Cell>
                        <DataTable.Cell>{product.manufacturer}</DataTable.Cell>
                        <DataTable.Cell>{product.catalog?.name}</DataTable.Cell>
                        <DataTable.Cell>{product.description}</DataTable.Cell>
                        <DataTable.Cell>{product.weight}</DataTable.Cell>
                        <DataTable.Cell>{product.length}</DataTable.Cell>
                        <DataTable.Cell>{product.width}</DataTable.Cell>
                        <DataTable.Cell>{product.height}</DataTable.Cell>
                        <DataTable.Cell>{product.article}</DataTable.Cell>
                        <DataTable.Cell numeric>{product.quantity}</DataTable.Cell>
                        <DataTable.Cell>{product.price}</DataTable.Cell>
                    </DataTable.Row>)
            }
            <DataTable.Pagination
            page={1}
            numberOfPages={3}
            onPageChange={page => {
                console.log(page);
            }}
            label="1-2 of 6"
            />
        </DataTable>
        </>
    );
}

export default Product;