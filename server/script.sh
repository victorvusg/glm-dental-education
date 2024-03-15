ssh -i "ec2-london.pem" ec2-user@ec2-18-130-151-60.eu-west-2.compute.amazonaws.com

cd $HOME
mkdir git
cd git
git clone https://github.com/meta-llama/llama.git
git clone https://github.com/vuanhtrankcl/llm-as-a-service.git

# Llama setup
cd $HOME/git/llama/
pip install -e .
./download.sh
# https://download.llamameta.net/*?Policy=eyJTdGF0ZW1lbnQiOlt7InVuaXF1ZV9oYXNoIjoia3h6N3liaWUzaGJnam8wcmYzNm43czgxIiwiUmVzb3VyY2UiOiJodHRwczpcL1wvZG93bmxvYWQubGxhbWFtZXRhLm5ldFwvKiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTcxMDU4ODQ3OX19fV19&Signature=V7Y1rJ9po45Y8arkX3e3RSTIs7lvvm3hEj8qJfyC6EnCHJK9Pof26HAe17Y1UAkOEY6yBtM%7EZdEZiCbVqzAwpO%7ErXTrfWxu%7EmU3hUPKBaXrvWO4u9KfRNHE50G56N3H%7EuvQsZxnbDxXjVyC8O83aH6LpXqPJ%7E4n5vA8pcAMfGcWov108SrCPOMhvSGpruqICus60TdfZpuGGgyG0CSsuPn1pzhpY2KomO9L%7EnEwifKmXJr8OHDLsRTbYGIHM1SvpAZ9pmRPqFuy8y541WKwhjakhujS-dfNMCUBqI%7EfujcuBBWlXaZA39ze4IGJcusrRESmRCBB0BNpVIza2gwetvg__&Key-Pair-Id=K15QRJLYKIFSLZ&Download-Request-ID=1143590610417544
# 7B-chat


cd $HOME/git/llm-as-a-service/
pip install poetry
poetry install

pip install pydantic
pip install fastapi
pip install uvicorn

export RANK="0"
export WORLD_SIZE="1"
export MASTER_ADDR="0.0.0.0"
export MASTER_PORT="2137"
export NCCL_P2P_DISABLE="1"
export OMP_NUM_THREADS=4  # optional

python laas/main.py