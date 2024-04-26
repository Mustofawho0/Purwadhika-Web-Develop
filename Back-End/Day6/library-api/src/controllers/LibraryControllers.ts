import { Request, Response } from 'express';
import { CreateLibraryQuery } from '../services/LibraryServices';

export const create = async (req: Request, res: Response): Promise<void> => {
  try {
    const { address, phone_number } = req.body;
    const createLibrary = await CreateLibraryQuery({ address, phone_number });

    res.send({
      error: false,
      message: 'Create Library Success',
      data: createLibrary,
    });
  } catch (error) {
    console.log(error);
  }
};

// ROLLBACK TRANSACTION
// UNDO APABILA TERJADI ERROR MODIFIKASI DATA KE LEBIH DARI 1 TABEL
