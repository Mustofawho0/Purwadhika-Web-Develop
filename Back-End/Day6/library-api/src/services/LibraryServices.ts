import db from './../connections';
import util from 'util';

const query: any = util.promisify(db.query).bind(db);

export const CreateLibraryQuery = async ({ address, phone_number }: any) => {
  await query(
    'insert into library_branch(address, phone_number) values (?,?)',
    [address, phone_number]
  );
};
