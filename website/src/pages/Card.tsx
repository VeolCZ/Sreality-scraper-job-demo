import { api } from "../utils/api";

type DashboardProps = {
  toSkip: number;
};

const Card: React.FC<DashboardProps> = (props) => {
  const getFlats = api.flatRouter.getFlats.useQuery({ skip: props.toSkip });

  return (
    <>
    {getFlats.data ? getFlats.data?.map(flat => (
      <div className="flex justify-center" key={flat.id}>
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <img className="rounded-sm" src={flat.imgUrls[0]} width={400} />
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">{flat.name}</h5>
            <p className="text-gray-700 text-base">{flat.locality}</p>
          </div>
        </div>
      </div>
    )) : Array(9).fill(1).map(_ =>(
      <div className="flex justify-center">
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        <img className="rounded-sm" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmpmco.com%2Fwp-content%2Fuploads%2F2018%2F02%2Fplaceholder.jpg&f=1&nofb=1&ipt=2a3e176355dc61face1320883c9e2d3ee6273b01eecf220d88b17ef517e55c33&ipo=images" width={400} />
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">Flat name</h5>
          <p className="text-gray-700 text-base">Flat locality</p>
        </div>
      </div>
    </div>
    ))}
    </>
  );
};

export default Card;
