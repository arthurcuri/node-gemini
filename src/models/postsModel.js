import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getAllPosts(){
    const db = conexao.db("node-instabytes");
    const colecao = db.collection("posts");
    return colecao.find().toArray();
}

export async function createPost(newPost){
    const db = conexao.db("node-instabytes");
    const colecao = db.collection("posts");
    return colecao.insertOne(newPost);
}

export async function updatePost(id, newPost){
    const db = conexao.db("node-instabytes");
    const colecao = db.collection("posts");
    const objId = ObjectId.createFromHexString(id); 
    return colecao.updateOne({_id: new ObjectId(objId)}, {$set: newPost});
}