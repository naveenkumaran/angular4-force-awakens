import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemoryStoreService implements InMemoryDbService {
    /**
     * 
     * IActor 
    id: number;
    name: string;
    email: string;
    devices?: IDevices[];
    
    IDevices 
    udid: string;
    name: string;
     * 
     */
  createDb() {
    const users = [
      {
        'id': 1,
        'name': 'Chewbacca',
        'email': 'chewy@starwars.com'
      },
      {
        'id':2,
        'name': 'Rey',
        'email': 'reythebay@starwars.com'
      },
      {
        'id': 3,
        'name': 'Finn (F1287)',
        'email': 'finn@starwars.com'
      },
      {
        'id': 4,
        'name': 'Han Solo',
        'email': 'hans@starwars.com'
      },
      {
        'id': 5,
        'name': 'Leia Organa',
        'email': 'leiag@starwars.com'
      },
      {
        'id': 6,
        'name': 'Luke Skywalker',
        'email': 'lwalker@starwars.com'
      },
    ];

    const devices = [
      {
        'id': 'UDID130',
        'name': 'Samsung Galaxy 6',
      },
      {
        'id': 'UDID131',
        'name': 'Samsung Galaxy 7',
      },
      {
        'id': 'UDID132',
        'name': 'Lenovo',
      },
      {
        'id': 'UDID133',
        'name': 'Nokia',
      },
      {
        'id': 'UDID134',
        'name': 'Oppo Camera Mobile',
      },
      {
        'id': 'UDID135',
        'name': 'IPhone 7',
      },
      {
        'id': 'UDID136',
        'name': 'Iphone 4S',
      },
      {
        'id': 'UDID137',
        'name': 'Iphone 5'
      },
      {
        'id': 'UDID138',
        'name': 'Iphone 5s',
      },
      {
        'id': 'UDID139',
        'name': 'Iphone 6',
      },
      {
        'id': 'UDID140',
        'name': 'Iphone 6s',
      },
    ];

    return { users, devices };
  }
}
