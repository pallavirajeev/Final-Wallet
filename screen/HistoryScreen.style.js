import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // borderWidth: 2,
        // borerColor: 'black'
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 40,
        borderBottomWidth: 1,
        borderColor: '#CCC9C9',
        justifyContent: 'center'
    },
    historyTitle: {
        flex: 1.33,
        // borderWidth: 3,
        // borderColor: 'black',
    },
    settingsIcon: {
        // borderWidth: 3,
        // borderColor: 'black',
        flex: 1,
        paddingLeft: 5
    },
    body: {
        flex: 20,
        // borderColor: 'black',
        // borderWidth: '2',
    },
    searchContainer: {
        flexDirection: 'row',
        flex: 1,
        width: '90%',
        marginTop: 20,
        marginHorizontal: '4.5%',
        // borderColor: 'red',
        // borderWidth: '2',
    },
    searchContainerInner: {
        flexDirection: 'row',
        width: '90%',
        borderColor: '#cccccc',
        borderRadius: 5,
        borderWidth: 1
    },
    searchBar: {
        marginLeft: 13,
        width: '87%'
    },
    historyListContainer: {
        width: '100%',
        flex: 20,
        padding: 19,
        paddingHorizontal: 22,
        // borderColor: 'green',
        // borderWidth: 2,
    },
});

export default styles;