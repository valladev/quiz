import questoes from "../bancoDeQuestoes";

export default function Questionario(req: any, res: any) {
    res.status(200).json(questoes.map(questao => questao.id))
}