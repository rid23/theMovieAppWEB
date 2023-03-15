import {  configureStore, legacy_createStore as createStore } from "redux"



export const storage = createStore(storeManager)


// storage architecture
// {
//     movie : "",
//     duration : "",
//     casts : {
//         1 : {
//             castName : ""
//             gender : "",
//             character : "",
//             dialogues : {
//                1 : {
//                   dialogue : "" 
//                   from : "",
//                   To : ""
//                }
//              }
//           }
//         
//     }
// }


function storeManager( storage={
    movie : "",
    duration : "",
    casts : { }
} ,action){
    switch (action.type) {

        case "addMovie" :
            storage.movie = action.payload.movie
            storage.duration = action.payload.duration
            storage.casts = {}
            return storage

        case "addCast" :
            temp_cast = action.payload.cast
            temp_gender = action.payload.gender
            temp_character = action.payload.character 
            castsKeys = Object.keys(storage.casts)
            temp_castkey = castsKeys.length + 1
            return { ...storage, casts : { ...storage.casts, temp_castkey : { "cast" : temp_cast, 'gender' : temp_gender, "character" : temp_character, "dialogues" : {} } } }

        case "addDialogue" :
            temp_dialogue = action.payload.dialogue
            temp_from = action.payload.from
            temp_to = action.payload.to
            _cast_ = action.payload.cast
            dialoguekeys = Object.keys(storage.casts.dialogues)
            temp_dialogue_key = dialoguekeys.length + 1
            return { ...storage, casts : { ...storage.casts, _cast_ : { ...storage.casts._casts_, "dialogues" : { ...storage.casts._cast_.dialogues, temp_dialogue_key : { "dialogue" : temp_dialogue, "from" : temp_from, "to": temp_to } } }} }

    }


}