export async function POST(req) {
  const body = await req.json();

  return Response.json({ message: 'done', data: body }, { status: 201 });
}
