import Lobby from '../models/lobby.model.js';

const lobbyController = {
    async createLobby(req, res, next) {
        try {
            const newLobby = await Lobby.create(req.body);
            res.json(newLobby);
        }
        catch (error) {
            next(error)
        }
    },
    async getAllLobbies(req, res, next) {
        try {
            const allLobbies = await Lobby.find();
            res.json(allLobbies);
        }
        catch (error) {
            next(error)
        }
    },
    async getOneLobby(req, res, next) {
        try {
            const id = req.params.id
            const foundLobby = await Lobby.findById(id);
            res.json(foundLobby);
        }
        catch (error) {
            next(error)
        }
    },
    async updateOneLobby(req, res, next) {
        const options = {
            new: true,
            runValidators: true,
        };
        try {
            const id = req.params.id
            const updatedLobby = await Lobby.findByIdAndUpdate(id, req.body, options);
            res.json(updatedLobby);
        }
        catch (error) {
            next(error)
        }
    },
    async deleteOneLobby(req, res, next) {
        try {
            const id = req.params.id
            const deletedLobby = await Lobby.findByIdAndDelete(id);
            res.json(deletedLobby);
        }
        catch (error) {
            next(error)
        }
    }
};

export default lobbyController;