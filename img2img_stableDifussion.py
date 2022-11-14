from torch import autocast
import torch
import requests
from PIL import Image
from io import BytesIO

from diffusers import StableDiffusionImg2ImgPipeline

# load the pipeline
device = "cuda"
pipe = StableDiffusionImg2ImgPipeline.from_pretrained(
    "CompVis/stable-diffusion-v1-4",
    revision="fp16",
    torch_dtype=torch.float16,
    use_auth_token=True
).to(device)


def img2img(imgobject, prompt):
    init_image = imgobject.convert("RGB")
    init_image = init_image.resize((768, 512))
    with autocast("cuda"):
        images = pipe(prompt=prompt, init_image=init_image, strength=0.75, guidance_scale=7.5).images
    return images


if __name__ == "__main__":
    imgobject = Image.open("test.jpg")
    images = img2img(imgobject, "A very beautiful anime girl, full body, long wavy blond hair, sky blue eyes")