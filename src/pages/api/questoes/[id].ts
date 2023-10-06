import questoes from "../bancoDeQuestoes";

export default function Handler(req: any, res: any) {
    res.status(200).json(questoes[0].ParaObjeto())
}
