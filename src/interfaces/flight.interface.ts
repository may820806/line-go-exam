export interface IFlight {
  FlightDate: string;
  FlightNumber: string;
  AirlineID: string;
  DepartureAirportID: string;
  ArrivalAirportID: string;
  ScheduleArrivalTime: string;
  ActualArrivalTime: string;
  EstimatedArrivalTime: string;
  ArrivalRemark: string;
  Terminal: string;
  Gate:  string;
  IsCargo: boolean;
  AcType: string;
  BaggageClaim: string;
  UpdateTime: string;
}