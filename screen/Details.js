import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Button} from 'react-native';
import React, {useEffect, useState} from 'react'

export default function Details(props) {
    
    // const text =  props.navigation.getParam('text', 'nothing sent')
    const text = props.route.params.text
    
    console.log(props)
 
    if(text === "Credential from History"){
        return (
            <View style={styles.CredentialtransactionCard}>
            <View style={{ flexDirection: 'row', width: '100%', height: '33%' }}>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.CtransactionCardTitles}>Transaction Type</Text>
                    <Text style={styles.CtransactionCardInfo}>{props.route.params.transactionType}</Text>
                </View>
                <View style={{ flexDirection: 'column', paddingLeft: 60 }}>
                    <Text style={styles.CtransactionCardTitles}>Status</Text>
                    <Text style={styles.CtransactionCardInfo}>{props.route.params.status}</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', width: '100%', height: '33%', paddingTop: 25 }}>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.CtransactionCardTitles}>Credential Name</Text>
                    <Text style={styles.CtransactionCardInfo}>{props.route.params.credentialName}</Text>
                </View>
                <View style={{ flexDirection: 'column', paddingLeft: 64 }}>
                    <Text style={styles.CtransactionCardTitles}>Issuer</Text>
                    <Text style={styles.CtransactionCardInfo}>{props.route.params.issuer}</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', width: '100%', height: '33%' }}>
                <View style={{ flexDirection: 'column', paddingTop: 25 }}>
                    <Text style={styles.CtransactionCardTitles}>Issue Date</Text>
                    <Text style={styles.CtransactionCardInfo}>{props.route.params.issueDate}</Text>
                </View>
                <View style={{ flexDirection: 'column', paddingLeft: 120, paddingTop: 25 }}>
                    <Text style={styles.CtransactionCardTitles}>Expiration Date</Text>
                    <Text style={styles.CtransactionCardInfo}>{props.route.params.expirationDate}</Text>
                </View>
            </View>
        </View>
        )
    }
    else {
        return (
            <View style={styles.VerificationtransactionCard} >
            <View style={{ flexDirection: 'row', width: '100%', height: '33%' }}>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.VtransactionCardTitles}>Transaction Type</Text>
                    <Text style={styles.VtransactionCardInfo}>{props.route.params.transactionType}</Text>
                </View>
                <View style={{ flexDirection: 'column', paddingLeft: 60 }}>
                    <Text style={styles.VtransactionCardTitles}>Status</Text>
                    <Text style={styles.VtransactionCardInfo}>{props.route.params.status}</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', width: '100%', height: '33%', paddingTop: 25 }}>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.VtransactionCardTitles}>Requested Credential</Text>
                    <Text style={styles.VtransactionCardInfo}>{props.route.params.requestedCredential}</Text>
                </View>
                <View style={{ flexDirection: 'column', paddingLeft: 17 }}>
                    <Text style={styles.VtransactionCardTitles}>Verifier</Text>
                    <Text style={styles.VtransactionCardInfo}>{props.route.params.verifier}</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', width: '100%', height: '33%' }}>
                <View style={{ flexDirection: 'column', paddingTop: 25 }}>
                    <Text style={styles.VtransactionCardTitles}>Accept Date</Text>
                    <Text style={styles.VtransactionCardInfo}>{props.route.params.acceptDate}</Text>
                </View>
                <View style={{ flexDirection: 'column', paddingLeft: 106, paddingTop: 25 }}>
                    <Text style={styles.VtransactionCardTitles}>Expiration Date</Text>
                    <Text style={styles.VtransactionCardInfo}>{props.route.params.expirationDate}</Text>
                </View>
            </View>
        </View>
        )
    }
};

const styles = StyleSheet.create({
    CredentialtransactionCard: {
        width: '96%',
        height: 400,
        marginTop: 5,
        marginBottom: 19,
        marginLeft: 8,
        backgroundColor: '#D0F0FA',
        borderRadius: 5,
        elevation: 3,
        shadowOpacity: 0.5,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowRadius: 2,
        paddingVertical: 45,
        paddingHorizontal: 27
    },
    VerificationtransactionCard: {
        width: '96%',
        height: 400,
        marginTop: 5,
        marginBottom: 19,
        marginLeft: 8,
        backgroundColor: '#1E6484',
        borderRadius: 5,
        elevation: 3,
        shadowOpacity: 0.5,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowRadius: 2,
        paddingVertical: 45,
        paddingHorizontal: 27
    },
    CtransactionCardTitles: {
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: 20,
        textShadowRadius: 1,
        shadowOpacity: 0.15,
        textShadowOffset: { width: 1, height: 1 }
    },
    VtransactionCardTitles: {
        color: 'white',
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: 20,
        textShadowRadius: 1,
        shadowOpacity: 0.15,
        textShadowOffset: { width: 1, height: 1 }
    },
    CtransactionCardInfo: {
        fontSize: 18,
        shadowOpacity: 0.25,
        textShadowRadius: 1,
        textShadowOffset: { width: 1, height: 1 }
    },
    VtransactionCardInfo: {
        color: 'white',
        fontSize: 18,
        shadowOpacity: 0.25,
        textShadowRadius: 1,
        textShadowOffset: { width: 1, height: 1 }
    }
});