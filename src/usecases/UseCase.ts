export default interface UseCase<InputDTO, OutputDTO> {
  execute(inpurt: InputDTO): Promise<OutputDTO> | OutputDTO;
}
