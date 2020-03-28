import React,{useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Image, Text, TouchableOpacity, FlatList} from 'react-native';
import {Feather} from '@expo/vector-icons';
import api from '../../services/api'

import logoImg from '../../assets/logo.png';

import styles from './style';

export default function Casos(){
    const navigation = useNavigation();
    const [casos, setCasos ] = useState([]);
    const [total, setTotal ] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    function navigateToDetail(casos){
        navigation.navigate('Detalhes', {caso});

       async function loadCasos(){
           if (loading) {
               return; 
           }
           if (total > 0 && casos.length === total){
               return;
           }

           setLoading(true);

        const response = await api.get('incidents', {params: {page}});

        setCasos(response.data);
        setTotal(response.headers['x-total-count']);
        setPage(page +1);
        setLoading(false);
       }

        useEffect(()=>{

        loadCasos();

        }, []);
    }
    return(
        <View  style = {styles.container}>
            <View style={styles.header}>
            <Image source={logoImg} />
            <Text style={styles.headerText}>
            Total de <Text style={styles.headerTextBold}>{total} casos</Text>
            </Text>
            </View>

            <Text style={styles.title}> Bem vindo! </Text>
            <Text style={styles.description}> Escolha um dos casos abaixo e salve o dia. </Text>
            
            <FlatList
            style={styles.casosList}
                data = {casos}
                keyExtractor={caso => String(caso.id)}
                showsVerticalScrollIndicator={false}
                renderItem ={({item: caso}) => (

                    <View >
                <View style={styles.casos}>
                    <Text style={styles.casosProperty}>ONG </Text>
                    <Text style={styles.casosValue}> {caso.name} </Text> 

                    <Text style={styles.casosProperty}> CASO </Text>
                    <Text style={styles.casosValue}> {caso.title} </Text> 

                    <Text style={styles.casosProperty}> VALOR </Text>
                    <Text style={styles.casosValue}> {Intl.NumberFormat('pt-Br', {style:'currency', currency:'BRL'})
                    .format(caso.value)} </Text> 

                    <TouchableOpacity style={styles.detalheButton}
                    onPress={()=> navigateToDetail(caso)}>

                        <Text style={styles.detalheButtonText}>Ver mais detalhes</Text>
                        <Feather name="arrow-right" size={16} color="#E02041" />
                    </TouchableOpacity>
                </View>

            </View>
                    
                )}
            />
            
        </View>

    )
}