import questoes from "../bancoDeQuestoes";

export default function Handler(req: any, res: any) {
    const idSelecionado = +req.query.id

    const unicaQuestao = questoes.filter(questao => questao.id === idSelecionado)

    if (unicaQuestao.length === 1) {
        const questaoSelecionada = unicaQuestao[0]
        res.status(200).json(questaoSelecionada.ParaObjeto())
    } else {
        res.status(204).send()
    }


}
