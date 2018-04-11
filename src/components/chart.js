export default const Chart=(props)=>{
  return (
    <Sparklines data={[5, 10, 5, 20]}>
      <SparklinesLine color="blue" />
    </Sparklines>
  )
}
