const TutoresServices = require('../services/TutoresService.js');
const tutoresService = new TutoresServices('Tutores');


class TutoresController{
    static async pegaTodosOsTutores(req, res) {
      try{
        const todosOsTutores = await tutoresService.pegaTodosOsRegistros();
        return res.status(200).json(todosOsTutores);
      }catch(error){
        return res.status(500).json(error.message);
      }
    }


    static async pegaUmTutor(req, res) {
        const { id } = req.params;
        try{
            const umTutor = await tutoresService.pegaUmRegistro(id);
            return res.status(200).json(umTutor);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }


    static async criaTutor(req, res) {
        const novoTutor = req.body;
        try{
            const novoTutorCriado = await tutoresService.criaRegistro(novoTutor);
            return res.status(200).json(novoTutorCriado);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }


    static async atualizaTutor(req, res) {
        const { id } = req.params;
        const novasInfos = req.body;
        try{
            await tutoresService.atualizaRegistro(novasInfos, id);
            const tutorAtualizado = await tutoresService.pegaUmRegistro(id);
            return res.status(200).json(tutorAtualizado);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }


    static async apagaTutor(req, res) {
        const { id } = req.params;
        try{
            await tutoresService.deletaRegistro(id);
            return res.status(200).json({ mensagem: `id ${id} deletado` });
        }catch(error){
            return res.status(500).json(error.message);
        }
    }
}



module.exports = TutoresController;